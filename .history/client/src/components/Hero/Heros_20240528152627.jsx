import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";

export default function App() {
  return (
    <div className="flex justify-center">
      {/* Card 1 */}
      <div className="mx-2">
        <Card
          isFooterBlurred
          radius="lg"
          className="border-none relative overflow-hidden"
        >
          <Image
            alt="Gaming title 1"
            className="object-cover"
            height={300}
            src="https://via.placeholder.com/300"
            width={200}
          />
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%-_8px)] shadow-small ml-1 z-10">
            <p className="text-tiny text-white/80">Available soon.</p>
            <Button
              className="text-sm text-white bg-black/20"
              variant="flat"
              color="default"
              radius="xl"
              size="md"
            >
              Notify me
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Repeat the above structure for the remaining 7 cards with different gaming titles */}
      {/* Card 2 */}
      <div className="mx-2">
        <Card
          isFooterBlurred
          radius="lg"
          className="border-none relative overflow-hidden"
        >
          <Image
            alt="Gaming title 2"
            className="object-cover"
            height={300}
            src="https://via.placeholder.com/300"
            width={200}
          />
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%-_8px)] shadow-small ml-1 z-10">
            <p className="text-tiny text-white/80">Available soon.</p>
            <Button
              className="text-sm text-white bg-black/20"
              variant="flat"
              color="default"
              radius="xl"
              size="md"
            >
              Notify me
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Repeat this structure for the remaining cards */}
    </div>
  );
}
