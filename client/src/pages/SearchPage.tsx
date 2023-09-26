import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useEffect, useState } from "react";

import { Accordion } from "@/components/ui/accordion"
import { Button } from '../components/ui/button';
import { CalendarDateRangePicker } from "@/components/Dashboard/date-range-picker";
import Company from "@/components/Search/filters/Company"
import EmailStatus from "@/components/Search/filters/EmailStatus";
import { Employees } from "@/components/Search/filters/Employees"
import IndustryAndKeywords from "@/components/Search/filters/IndustryAndKeywords"
import JobTitles from "@/components/Search/filters/JobTitles"
import Lists from "@/components/Search/filters/Lists"
import Location from "@/components/Search/filters/Location"
import { MainNav } from '../components/Dashboard/main-nav';
import Name from "@/components/Search/filters/Name"
import { People } from "@/components/Search/table/data/schema";
import { Search } from '../components/Dashboard/search';
import { SearchPeopleTable } from '@/components/Search/table/SearchPeopleTable';
import TeamSwitcher from '../components/Dashboard/team-switcher';
import { UserNav } from '../components/Dashboard/user-nav';
import { columns } from "@/components/Search/table/data/columns";
import { peopleData } from "@/components/Search/table/data/jsonData";

export default function SearchPage() {
  const [people, setPeople] = useState<People[]>([])

  useEffect(() => {
    async function fetchPeople() {
      const data = peopleData;
      setPeople(data);
    }

    fetchPeople();
  }, []);
  
    return (
      <> 
        <div className="h-screen hidden flex-col md:flex">
          {/* User navbar  */}
          <div className="border-b">
            <div className="flex h-16 items-center px-4">
              <TeamSwitcher />
              <MainNav className="mx-6" />
              <div className="ml-auto flex items-center space-x-4">
                <Search />
                <UserNav />
              </div>
            </div>
          </div>
          
          <div className="flex-1 space-y-4 p-8 pt-6">
            
            <div className="flex items-center justify-between space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">Search</h2>
              <div className="flex items-center space-x-2">
                <CalendarDateRangePicker />
                <Button>Download</Button>
              </div>
            </div>

            <Tabs defaultValue="people" className="space-y-4">
              <TabsList>
                <TabsTrigger value="people">People</TabsTrigger>
                <TabsTrigger value="companies" >
                  Companies
                </TabsTrigger>
                <TabsTrigger value="lists" >
                  Lists
                </TabsTrigger>
              </TabsList>

              <TabsContent value="people" className="space-y-4">
          
                <div className="grid gap-2 md:grid-cols-12 lg:grid-cols-12">

                  <ScrollArea className="col-span-4 w-full h-[60vh] rounded-md border">
                    <div className="p-4">
                      <Search />

                      <Accordion type="single" collapsible className="w-full">
                        <h4 className="text-md font-bold leading-none mt-4 mb-2">Filters</h4>
                        
                        <Lists />
                        <Name />
                        <JobTitles />
                        <Company />
                        <Location />
                        <Employees />
                        <IndustryAndKeywords />
                        <EmailStatus />
                        
                      </Accordion>

                    </div>
                  </ScrollArea>
                  
                  <Card className="h-[60vh] col-span-8">
                    <CardHeader>
                      <CardTitle>Overview</CardTitle>
                    </CardHeader>
                    <CardContent>

                      <ScrollArea className="h-[280px] w-auto">
                        <ScrollBar orientation="horizontal" />
                            <SearchPeopleTable data={people} columns={columns} />
                      </ScrollArea>

                    </CardContent>
                  </Card>
                  
                </div>
                
              </TabsContent>
            


            <TabsContent value="companies" className="space-y-4">
          
                <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-12">

                  <ScrollArea className="col-span-4 h-[60vh] rounded-md border">
                   
                  </ScrollArea>

                  <Card className="h-[60vh] col-span-8">
                    
                  </Card>
                  
                </div>
                
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </>
    )
  }
  
  



// export default function EmailStatus(){
   
//     return (
//       <>
//         <AccordionItem value="companyKeywords">
//           <AccordionTrigger>Company Keywords</AccordionTrigger>
//           <AccordionContent>
//             <Card>
//               <CardContent className="p-4">
              
//               </CardContent>
//             </Card>
          
//           </AccordionContent>
//         </AccordionItem>
//       </>
//     );
// };
    