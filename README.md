CREATE TYPE appointment_status AS ENUM ('Upcoming', 'Passed', 'Cancelled');

CREATE TABLE IF NOT EXISTS appointments (
id SERIAL PRIMARY KEY,
user_id UUID REFERENCES auth.users NOT NULL,
date DATE NOT NULL,
time TIME NOT NULL,
extra_note TEXT,
status appointment_status NOT NULL DEFAULT 'Upcoming',
is_completed BOOLEAN DEFAULT false,
inserted_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row-Level Security for the appointments table
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

-- Policy for users to view their own appointments
CREATE POLICY "Users can view their own appointments" ON appointments
FOR SELECT USING (
auth.uid() = user_id
);

-- Policy for users to add new bookings
CREATE POLICY "Users can add new bookings" ON appointments
FOR INSERT WITH CHECK (
auth.uid() = user_id
);

-- Policy for users to update their own bookings
CREATE POLICY "Users can update their own bookings" ON appointments
FOR UPDATE USING (
auth.uid() = user_id AND status = 'Upcoming'
);

-- Additional Policy: Allow users to cancel their own bookings
-- Note: This might be redundant given your last policy, but ensure your update statement aligns with policy conditions.
CREATE POLICY "Users can cancel their own bookings" ON appointments
FOR UPDATE USING (
auth.uid() = user_id
) WITH CHECK (
status = 'Cancelled'
);

create table if not exists
profile (
id bigint primary key generated always as identity,
user_id uuid references auth.users not null,
name text not null,
phone_number int not null,
inserted_at timestamp with time zone default timezone ('utc'::text, now()) not null,
foreign key (user_id) references auth.users
);

alter table profile enable row level security;

create policy "Users can add their detail" on profile for insert
with
check (auth.uid () = user_id);

create policy "Users can view their own bookings" on profile
for select using (auth.uid () = user_id);

ALTER POLICY "Update appointment status to Cancelled." ON public.appointments
FOR UPDATE
TO auth.uid () USING (status = 'Cancelled')
WITH
CHECK (status IN ('Upcoming', 'Passed', 'Cancelled'));

alter table public.appointments
alter column status
set default 'Upcoming';
