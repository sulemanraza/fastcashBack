"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqItem = ({ faq }: any) => {
  return (
    <>
      {faq.map(({ id, question, answer }: any) => {
        return (
          <Accordion
            className="rounded-sm mt-10"
            type="single"
            collapsible
            key={id}
          >
            <AccordionItem className="bg-white" value={`item-${id}`}>
              <AccordionTrigger className="p-3">{question}</AccordionTrigger>

              <AccordionContent className="p-3">{answer}</AccordionContent>
            </AccordionItem>
          </Accordion>
        );
      })}
    </>
  );
};

export default FaqItem;
