import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"; 
import { Card, CardContent } from '@/components/ui/card';
import Login from "./Login";
import Register from "./register";

const AuthTabs = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center  p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardContent className="p-6">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger 
                value="login"
                className="data-[state=active]:font-semibold"
              >
                Sign In
              </TabsTrigger>
              <TabsTrigger 
                value="register"
                className="data-[state=active]:font-semibold"
              >
                Create Account
              </TabsTrigger>
            </TabsList>
            
            <TabsContent 
              value="login"
              className="mt-0 space-y-4"
            >
              <Login />
            </TabsContent>
            
            <TabsContent 
              value="register"
              className="mt-0 space-y-4"
            >
              <Register />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthTabs;
