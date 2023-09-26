import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import { Contact } from "lucide-react";
import { Input } from "@/components/ui/input";

const Name = () => {
  return (
    <>
    <AccordionItem value="name">
        <AccordionTrigger>
          <div className="flex gap-2 items-center">
            <Contact size={18} />
            Name
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <Input type="text" placeholder="Enter name" />
        </AccordionContent>
    </AccordionItem>

    </>
  );
};

export default Name;
