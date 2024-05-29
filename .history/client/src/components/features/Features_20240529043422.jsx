import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";

export default function App() {
  return (
    <div className="max-w-full gap-2 grid grid-cols-12 grid-rows-3 px-8 mt-32">
      {/* First Row */}
      <Card className="col-span-12 sm:col-span-3 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Game of the Month
          </p>
          <h4 className="text-white font-medium text-large glow">
            Experience Ultimate Gaming
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://nextui.org/images/card-example-4.jpeg"
        />
      </Card>
      <Card className="col-span-12 sm:col-span-3 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Tournament Manager
          </p>
          <h4 className="text-white font-medium text-large glow">
            Organize Your Tournaments
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://nextui.org/images/card-example-3.jpeg"
        />
      </Card>
      <Card className="col-span-12 sm:col-span-3 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Results Tracker
          </p>
          <h4 className="text-white font-medium text-large glow">
            Track Match Results
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://nextui.org/images/card-example-2.jpeg"
        />
      </Card>
      <Card className="col-span-12 sm:col-span-3 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Slot Scheduler
          </p>
          <h4 className="text-white font-medium text-large glow">
            Create & Manage Slots
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://nextui.org/images/card-example-1.jpeg"
        />
      </Card>

      {/* Second Row */}
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-6"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            New Gear
          </p>
          <h4 className="text-black font-medium text-2xl glow">
            Acme Gaming Camera
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src="queen1.jpg"
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-black text-tiny">Available soon.</p>
            <p className="text-black text-tiny">Get notified.</p>
          </div>
          <Button
            className="text-tiny text-black bg-transparent border border-black/60 hover:bg-black/10"
            radius="full"
            size="sm"
          >
            Notify Me
          </Button>
        </CardFooter>
      </Card>
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-6"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Points Table
          </p>
          <h4 className="text-white/90 font-medium text-xl glow">
            View Leaderboards
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Leaderboard background"
          className="z-0 w-full h-full object-cover"
          src="queen.jpg"
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <Image
              alt="Leaderboard icon"
              className="rounded-full w-10 h-11 bg-black"
              src="https://nextui.org/images/leaderboard-icon.jpeg"
            />
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">Leaderboard</p>
              <p className="text-tiny text-white/60">Track top players.</p>
            </div>
          </div>
          <Button
            className="text-tiny text-white bg-transparent border border-white/60 hover:bg-white/10"
            radius="full"
            size="sm"
          >
            View Now
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
