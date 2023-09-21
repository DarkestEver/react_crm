import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

import { List } from "lucide-react";

const Lists = () => {
  return (
    <>
        <AccordionItem value="lists">
           <AccordionTrigger>
                <div className="flex gap-2 items-center">
                    <List size={18}/>
                    Lists
                </div>
            </AccordionTrigger>
           <AccordionContent>
            <Card>
            <CardContent className="p-3">
                <Tabs defaultValue="people" className="w-auto">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="people">People</TabsTrigger>
                    <TabsTrigger value="companies">Companies</TabsTrigger>
                </TabsList>
                <TabsContent value="people">
                    <div className="w-full">
                    <p>Include Lists</p>
                    <Select>
                        <SelectTrigger className="">
                        <SelectValue placeholder="Select Lists.." />
                        </SelectTrigger>
                        <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Fruits</SelectLabel>
                            <SelectItem value="apple">Apple</SelectItem>
                            <SelectItem value="banana">Banana</SelectItem>
                            <SelectItem value="blueberry">Blueberry</SelectItem>
                        </SelectGroup>
                        </SelectContent>
                    </Select>
                    </div>
                </TabsContent>
                <TabsContent value="companies">
                    <div className="w-full">
                    <p>Include Lists</p>
                    <Select>
                        <SelectTrigger className="">
                        <SelectValue placeholder="Select Lists.." />
                        </SelectTrigger>
                        <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Fruits</SelectLabel>
                            <SelectItem value="apple">Apple</SelectItem>
                            <SelectItem value="banana">Banana</SelectItem>
                            <SelectItem value="blueberry">Blueberry</SelectItem>
                        </SelectGroup>
                        </SelectContent>
                    </Select>
                    </div>
                </TabsContent>
                </Tabs>
            </CardContent>
            </Card>
           </AccordionContent>
         </AccordionItem>

    </>
  );
};

export default Lists;
