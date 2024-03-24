import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button, buttonVariants } from "../ui/button";

import { Input } from "../ui/input";
import { login, signup } from "@/server/login";
import { createClient } from "@/utils/supabase/server";
import LogOutButton from "./LogOutButton";

export default async function AuthModal() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return <>{user ? <LogOutButton /> : <AuthForm />}</>;
}

export const AuthForm = () => {
  return (
    <Dialog>
      <DialogTrigger>Login</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>WellCome My Friend!</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <form>
          <label htmlFor="email">Email:</label>

          <Input id="email" name="email" type="email" required />
          <label htmlFor="password">Password:</label>
          <Input id="password" name="password" type="password" required />
          <Button formAction={login} className="mx-2">
            Log in
          </Button>
          <Button formAction={signup} className="mx-2">
            Sign up
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

// import { Button } from "@/components/ui/button"
// import { CardHeader, CardContent, Card } from "@/components/ui/card"
// import { Label } from "@/components/ui/label"
// import { Input } from "@/components/ui/input"
// import Link from "next/link"

// export default function Component() {
//   return (
//     <Card className="w-full max-w-sm mx-auto">
//       <CardHeader>
//         <div className="text-center">
//           <h2 className="text-lg font-medium">Sign in to your account</h2>
//           <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
//             Or
//             <Button size="sm" variant="ghost">
//               create an account
//             </Button>
//           </p>
//         </div>
//       </CardHeader>
//       <CardContent className="flex gap-4 flex-col">
//         <div className="space-y-2">
//           <Label htmlFor="email">Email</Label>
//           <Input id="email" placeholder="john@example.com" type="email" />
//         </div>
//         <div className="space-y-2">
//           <div className="flex items-center justify-between">
//             <Label className="mb-0" htmlFor="password">
//               Password
//             </Label>
//             <Link href="#" size="sm" variant="muted">
//               Forgot password?
//             </Link>
//           </div>
//           <Input id="password" type="password" />
//         </div>
//         <Button className="w-full" type="submit">
//           Sign in
//         </Button>
//         <Button className="w-full" variant="outline">
//           Sign in with Google
//         </Button>
//       </CardContent>
//     </Card>
//   )
// }
