import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { AlertCircle, HelpCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function CompanyKeywords(){
    const [ isIncludeKeywords , setIsIncludeKeywords ] = useState(false);
    const [ isIncludeAll , setIsIncludeAll ] = useState(false);
    const [ isExclude , setIsExclude ] = useState(false);
   
    return (
      <>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="companyKeywords">
          <AccordionTrigger>Company Keywords</AccordionTrigger>
          <AccordionContent>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                    <Checkbox id="keywords" onClick={() => setIsIncludeKeywords(prevState => !prevState)}/>
                    <label
                    htmlFor="keywords"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Include keywords
                    </label>
                    <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger><AlertCircle size={16} /></TooltipTrigger>
                          <TooltipContent>
                            <p>
                                Keywords filters may slow down your search. <br /> 
                                Note: By default, social media description and <br />
                                SEO description are note included becuase they <br />
                                can be inaccurate. For example, a company that <br />
                                mentioned "marketing" in its descriptions is <br />
                                not necessarily a marketing compnay.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
                { isIncludeKeywords && <div className="pt-2">
                        <Input type="text" placeholder="eg. Cloud,AWS" />
                        <AdvancedComponent />
                    </div>
                }
              </CardContent>
            </Card>


            <Card className="mt-2">
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                    <Checkbox id="keywords" onClick={() => setIsIncludeAll(prevState => !prevState)}/>
                    <label
                    htmlFor="keywords"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Include All
                    </label>
                    <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger><AlertCircle size={16} /></TooltipTrigger>
                          <TooltipContent>
                            <p>
                                Keywords filters may slow down your search. <br /> 
                                Note: By default, social media description and <br />
                                SEO description are note included becuase they <br />
                                can be inaccurate. For example, a company that <br />
                                mentioned "marketing" in its descriptions is <br />
                                not necessarily a marketing compnay.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
                { isIncludeAll && <div className="pt-2">
                        <Input type="text" placeholder="Include all keywords..." />
                        <AdvancedComponent />
                    </div>
                }
              </CardContent>
            </Card>


            <Card className="mt-2">
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                    <Checkbox id="keywords" onClick={() => setIsExclude(prevState => !prevState)}/>
                    <label
                    htmlFor="keywords"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Include All
                    </label>
                    <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger><AlertCircle size={16} /></TooltipTrigger>
                          <TooltipContent>
                            <p>
                                Keywords filters may slow down your search.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
                { isExclude && <div className="pt-2">
                        <Input type="text" placeholder="Exclude keywords..." />
                        <AdvancedComponent />
                    </div>
                }
              </CardContent>
            </Card>
          
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      </>
    );
};

const AdvancedData = [
  {
    id: "companyName",
    htmlFor: "companyName",
    label: "Company Name"
  },
  {
    id: "socialTags",
    htmlFor: "socialTags",
    label: "Social media tags",
    tooltip: "The industry, subindustries, and specialties listed on a company's social media profiles"
  },
  {
    id: "socialDescription",
    htmlFor: "socialDescription",
    label: "Social media description",
    tooltip: "The words a company uses to describe itself on it's social media profiles. This may not be accurate."
  },
  {
    id: "seo",
    htmlFor: "seo",
    label: "SEO description",
    tooltip: "The SEO description the company puts up for search engines such as Google and Bing. This may not be accurate."
  },
]
function AdvancedComponent() {
  return (
    <>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Advanced</AccordionTrigger>
          <AccordionContent>
            <p className="font-bold">What kind of keywords would you like to search for?</p>
            <div className="flex flex-col items-start gap-2 pt-2">
              {AdvancedData.map((data) => { 
                return (
                  <div className="flex gap-2 items-center">
                    <Checkbox id={data.id} />
                    <label
                      htmlFor={data.htmlFor}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      <div className="flex gap-1 items-center">
                        {data.label} 
                        { data?.tooltip && 
                            <TooltipProvider>
                             <Tooltip>
                               <TooltipTrigger asChild>
                                <HelpCircle size={16} className="cursor-pointer"/>
                               </TooltipTrigger>
                               <TooltipContent>
                                 <p>{data.tooltip}</p>
                               </TooltipContent>
                             </Tooltip>
                           </TooltipProvider>
                        }
                      </div>
                    </label>
                  </div>
                )
              })}
              
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

    </>
  )
}