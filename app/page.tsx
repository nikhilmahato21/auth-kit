import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-full flex-col justify-center items-center bg-gradient-to-tr from-sky-200 to-indigo-600 ">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-semibold text-white drop-shadow-md font-Poppins">
          Auth
        </h1>
        <p className="font-Poppins font-semibold text-gray-200">
          A simple Authentication Service
        </p>

        <div>
          <LoginButton >
            <Button variant="secondary" size="lg">
              sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
