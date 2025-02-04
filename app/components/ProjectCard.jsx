import React from "react";
import Layout from "./Layout";
import Link from "next/link";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const ProjectCard = () => {
  return (
    <section className="flex items-center w-full min-h-screen">
      <Layout className="pt-0">


    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>SaaS project</CardTitle>
        <CardDescription>A template that can be customised for any SaaS product.</CardDescription>
      </CardHeader>
      <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <div>Name</div>
            </div>
            <div className="flex flex-col space-y-1.5">
              <div>Framework</div>
              
            </div>
          </div>
      </CardContent>
      <CardFooter className="flex justify-center iteams-center">
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
    </Layout>
    </section>
  )
};

export default ProjectCard;