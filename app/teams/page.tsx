import { Heading } from "@/components/Heading";
import { TeamCard } from "@/components/TeamCard";
import { TeamSection } from "@/components/TeamSection";
import teamData from "@/public/team-roles.json";
import { Metadata } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = {
  title: "Teams - Developers & Coders Club",
  description: "We raise awareness of the multitude of opportunities available,such as internships with tech giants like Google and Microsoft, national coding competitions and hackathons hosted by tech companies, and opportunities to collaborate on projects to develop skills. By highlighting these opportunities, we strive to empower individuals to take advantage of them and reach their full potential.",
  keywords:['DCC', 'NIT Agartala', 'CP', 'DCCNITA'],
  openGraph:{
    images:'/Home/logo.png'
  }
};

export default function Page() {
  return (
    <main className="min-h-screen">
      <section className="text-white space-y-10">
        <Heading>Meet The Team</Heading>
        <Tabs defaultValue="2023">
          <TabsList className="flex w-fit mx-auto">
            <TabsTrigger value="2023">2023</TabsTrigger>
          </TabsList>
          <TabsContent value="2023">
            <section className="mx-20">
              <article>
                <h3 className="text-center text-2xl py-5">Executive Team</h3>
                <div className="flex items-center flex-wrap justify-center xl:gap-20 gap-5">
                  {Object.keys(teamData).map((role: string) => {
                    if (
                      role == "president" ||
                      role == "vice president" ||
                      role == "general secretary" ||
                      role == "event head" ||
                      role == "treasurer"
                    ) {
                      return teamData[role].map(
                        (data: {
                          name: string;
                          profile_pic: string;
                          linkedin: string;
                          github: string;
                          tags: string;
                        }) => (
                          <TeamCard
                            key={data.name}
                            name={data.name}
                            profile_url={data.profile_pic}
                            linkedin={data.linkedin}
                            github={data.github}
                            designation={data.tags}
                          />
                        )
                      );
                    }
                  })}
                </div>
              </article>
              <TeamSection
                data={teamData}
                team="web"
                title="Web Development Team"
              />
              <TeamSection
                data={teamData}
                team="android"
                title="Android Development Team"
              />
              <TeamSection
                data={teamData}
                team="cp"
                title="Competitive Programming Team"
              />
              <TeamSection
                data={teamData}
                team="dsa"
                title="Data Structure and Algorithms Team"
              />
              <TeamSection
                data={teamData}
                team="ml"
                title="Machine Learning Team"
              />
              <TeamSection
                data={teamData}
                team="sm"
                title="Social Media & Outreach Team"
              />
              <TeamSection data={teamData} team="gr" title="Graphics Team" />
            </section>
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
      </section>
    </main>
  );
}
