import { GalleryVerticalEnd } from "lucide-react"

import { LoginForm } from "@workspace/ui/components/login-form"

export default function LoginPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="/" className="flex items-center gap-2 self-center font-medium">
          <img src="https://storage.googleapis.com/www.spinblitz.com/spinblitz-images/logo-long.png" className="h-7" alt="SpinBlitz" />
        </a>
        <LoginForm />
      </div>
    </div>
  )
}
