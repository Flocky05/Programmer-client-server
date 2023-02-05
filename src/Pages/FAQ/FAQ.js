import React, { useState } from "react";

const Item = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border rounded shadow-sm">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex  justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium !text-left">{title}</p>
        <div className="flex items-center justify-center w-8 h-8 border rounded-full">
          <svg
            viewBox="0 0 24 24"
            className={`w-3 text-gray-600 transition-transform duration-200 ${
              isOpen ? "transform rotate-180" : ""
            }`}
          >
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="2,7 12,17 22,7"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-gray-700">{children}</p>
        </div>
      )}
    </div>
  );
};
const FAQ = () => {
  return (
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div class="flex flex-col mb-16 sm:text-center">
          <a href="/" class="mb-6 sm:mx-auto">
            <div class="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50"></div>
          </a>
          <div class="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
            <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span class="relative inline-block">
                <span class="relative">The</span>
              </span>{" "}
              FAQ: YouKn0wWho Academy
            </h2>
          </div>
        </div>
        <div class="space-y-4">
          <Item title="Can you be my personal trainer?">
            If you get stuck in some problem, then, I, personally, will help you
            solve that problem anytime (sometimes using a direct video call!).
            If it takes lifetime for you to complete some course, then I will
            help you for lifetime! In general I take around 2h everyday to
            answer everyone’s questions. Also, I sit with all the academy
            members biweekly to understand how everyone is doing. So by taking
            some course, you are having me as your Personal Trainer!
          </Item>
          <Item title="What is the thing that is great about this Academy?">
            We will interact with each other daily to solve the problems that
            you face. You will be provided with all the resources and the
            problems that you need to solve but when you struggle to solve those
            problems or any other problems, then you can immediately knock me on
            discord and I or other students will help you almost instantly. We
            are more like a community and we are more than happy to have you
            here!
          </Item>
          <Item title="Can I get discounts on the courses?">
            If you are a school or college student, then you will get INSANE
            amount of discounts (70% discount in some cases!, check the
            website). Otherwise, if you are an old academy member, then you can
            get 20% discounts on your next course by solving more problems in
            your current course! Check Academy Gold Pass to learn more.
          </Item>
          <Item title="Do you have Promo Codes?">
            Yes. Because you deserve some discounts! You can get promo codes
            from academy members and use them to get a 200 BDT discount! Note
            that the person who gives you the promo code will also receive 200
            BDT!
          </Item>
          <Item title="Will the classes be live?">
            Most of the courses are recordings of live classes. But here is what
            you will get Extensive written resources on each class topic. Check
            this demo to understand what it looks like. Contests with curated
            hand-picked problems (20+ problems per contest on average).
            Editorials and Codes of the problems. Some of them have video
            editorials. Lifetime Discord server access to get help from me and
            other members who took this course. Video Recordings of the live
            class. Video Chapters for each video so that you can navigate the
            timestamps easily. So the only difference between this and live
            class is you are watching a live class but you can’t ask questions
            directly in the class, but you can ask them on discord directly to
            me. I am waiting to reply to your questions. Can I join anytime
          </Item>
          <Item title="Can I join anytime?">
            Yes, you can join anytime even after years as the classes are not
            live and all contents have been pushed to the website.
          </Item>
          <Item title="Can I directly talk to you?">
            Yes, I sit with all academy members biweekly to understand how
            everyone is doing. Also, if you solve most of the problems from some
            course, then you can set 30 minutes 1:1 meeting with me! I would
            love to talk to you.
          </Item>
          <Item title="Why am I giving huge discounts for school and college students?">
            I mean these kids are only in school and college and trying to learn
            Programming at this early age! Isn’t it itself pretty cool? So, to
            motivate them more I made this easier for them. That’s it. If you
            have other questions, feel free to ask in the comments or knock me
            on Facebook or anywhere you like.
          </Item>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
