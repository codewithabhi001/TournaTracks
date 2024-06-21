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
      <Card className="col-span-12 sm:col-span-3 h-[300px] relative">
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <Image
          removeWrapper
          alt="Card background"
          className="w-full h-full object-cover"
          src="https://img.freepik.com/premium-photo/woman-sitting-table-with-virtual-reality-headset-generative-ai_733139-83537.jpg?w=740"
          loading="lazy"
        />
        <div className="absolute bottom-4 left-4 text-white z-10">
          <p className="text-sm uppercase font-bold text-gray-300">
            Game of the Month
          </p>
          <h4 className="text-lg font-bold text-white">
            Experience Ultimate Gaming
          </h4>
        </div>
        <div className="absolute bottom-4 right-4 z-10 flex gap-2">
          <Button
            className="text-tiny text-white bg-transparent border border-white/60 hover:bg-white/10"
            radius="full"
            size="sm"
          >
            Learn More
          </Button>
          <Button
            className="text-tiny text-white bg-transparent border border-white/60 hover:bg-white/10"
            radius="full"
            size="sm"
          >
            Play Now
          </Button>
        </div>
      </Card>
      <Card className="col-span-12 sm:col-span-3 h-[300px] relative">
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <Image
          removeWrapper
          alt="Card background"
          className="w-full h-full object-cover"
          src="https://img.freepik.com/free-photo/woman-wearing-vr-glasses-gaming_23-2151138365.jpg?t=st=1717113327~exp=1717116927~hmac=16d9077a4e0b050e4732391a0ebba63dc0903de577856ae3b40bbe8d4e065707&w=996"
          loading="lazy"
        />
        <div className="absolute bottom-4 left-4 text-white z-10">
          <p className="text-sm uppercase font-bold text-gray-300">
            Tournament Manager
          </p>
          <h4 className="text-lg font-bold text-white">
            Organize Your Tournaments
          </h4>
        </div>
        <div className="absolute bottom-4 right-4 z-10 flex gap-2">
          <Button
            className="text-tiny text-white bg-transparent border border-white/60 hover:bg-white/10"
            radius="full"
            size="sm"
          >
            Learn More
          </Button>
          <Button
            className="text-tiny text-white bg-transparent border border-white/60 hover:bg-white/10"
            radius="full"
            size="sm"
          >
            Play Now
          </Button>
        </div>
      </Card>
      <Card className="col-span-12 sm:col-span-3 h-[300px] relative">
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <Image
          removeWrapper
          alt="Card background"
          className="w-full h-full object-cover"
          src="https://img.freepik.com/free-photo/cartoon-woman-wearing-vr-glasses_23-2151136778.jpg?t=st=1717113258~exp=1717116858~hmac=fadc36c7eddd0aa31a9cb4bd364f819f30e669340feb258fe4a7fc604248f19f&w=996"
          loading="lazy"
        />
        <div className="absolute bottom-4 left-4 text-white z-10">
          <p className="text-sm uppercase font-bold text-gray-300">
            Results Tracker
          </p>
          <h4 className="text-lg font-bold text-white">Track Match Results</h4>
        </div>
        <div className="absolute bottom-4 right-4 z-10 flex gap-2">
          <Button
            className="text-tiny text-white bg-transparent border border-white/60 hover:bg-white/10"
            radius="full"
            size="sm"
          >
            Learn More
          </Button>
          <Button
            className="text-tiny text-white bg-transparent border border-white/60 hover:bg-white/10"
            radius="full"
            size="sm"
          >
            Play Now
          </Button>
        </div>
      </Card>
      <Card className="col-span-12 sm:col-span-3 h-[300px] relative">
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <Image
          removeWrapper
          alt="Card background"
          className="w-full h-full object-cover"
          src="https://img.freepik.com/free-photo/woman-with-vr-glasses-futuristic-city_23-2150904762.jpg?t=st=1717113396~exp=1717116996~hmac=d510e3db84bafdaa251d925cf1bd89bb8f21edf62f21a5b3be79c344761232b1&w=360"
          loading="lazy"
        />
        <div className="absolute bottom-4 left-4 text-white z-10">
          <p className="text-sm uppercase font-bold text-gray-300">
            Slot Scheduler
          </p>
          <h4 className="text-lg font-bold text-white">
            Create & Manage Slots
          </h4>
        </div>
        <div className="absolute bottom-4 right-4 z-10 flex gap-2">
          <Button
            className="text-tiny text-white bg-transparent border border-white/60 hover:bg-white/10"
            radius="full"
            size="sm"
          >
            Learn More
          </Button>
          <Button
            className="text-tiny text-white bg-transparent border border-white/60 hover:bg-white/10"
            radius="full"
            size="sm"
          >
            Play Now
          </Button>
        </div>
      </Card>

      {/* Second Row */}
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-6 relative"
      >
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <Image
          removeWrapper
          alt="Card example background"
          className="w-full h-full scale-125 -translate-y-6 object-cover"
          src="https://img.freepik.com/free-photo/woman-wearing-vr-glasses-gaming_23-2151138365.jpg?t=st=1717113327~exp=1717116927~hmac=16d9077a4e0b050e4732391a0ebba63dc0903de577856ae3b40bbe8d4e065707&w=996"
          loading="lazy"
        />
        <div className="absolute bottom-4 left-4 text-white z-10">
          <p className="text-sm uppercase font-bold text-gray-300">New Gear</p>
          <h4 className="text-2xl font-bold text-white">Acme Gaming Camera</h4>
        </div>
        <div className="absolute bottom-4 right-4 z-10 flex gap-2">
          <Button
            className="text-tiny text-white bg-transparent border border-white/60 hover:bg-white/10"
            radius="full"
            size="sm"
          >
            Learn More
          </Button>
          <Button
            className="text-tiny text-white bg-transparent border border-white/60 hover:bg-white/10"
            radius="full"
            size="sm"
          >
            Buy Now
          </Button>
        </div>
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-white text-tiny">Available soon.</p>
            <p className="text-white text-tiny">Get notified.</p>
          </div>
          <Button
            className="text-tiny text-white bg-transparent border border-white/60 hover:bg-white/10"
            radius="full"
            size="sm"
          >
            Notify Me
          </Button>
        </CardFooter>
      </Card>
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-6 relative"
      >
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <Image
          removeWrapper
          alt="Leaderboard background"
          className="w-full h-full object-cover"
          src="https://img.freepik.com/free-photo/medium-shot-woman-djing-with-augmented-reality-glasses_23-2151425718.jpg?t=st=1717113534~exp=1717117134~hmac=156d85b340e37150067a2d5728454aedcd501cd54c545118ff4893ae805e4a7f&w=996"
          loading="lazy"
        />
        <div className="absolute bottom-4 left-4 text-white z-10">
          <p className="text-sm uppercase font-bold text-gray-300">
            Points Table
          </p>
          <h4 className="text-xl font-bold text-white">View Leaderboards</h4>
        </div>
        <div className="absolute bottom-4 right-4 z-10 flex gap-2">
          <Button
            className="text-tiny text-white bg-transparent border border-white/60 hover:bg-white/10"
            radius="full"
            size="sm"
          >
            Learn More
          </Button>
          <Button
            className="text-tiny text-white bg-transparent border border-white/60 hover:bg-white/10"
            radius="full"
            size="sm"
          >
            View Now
          </Button>
        </div>
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <Image
              alt="Leaderboard icon"
              className="rounded-full w-10 h-11 bg-black"
              src="https://nextui.org/images/leaderboard-icon.jpeg"
              loading="lazy"
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
