"use client";
import DeviceActionLabel from "@/components/device-action-label";
import { EmblaCarousel } from "@/components/embla-carousel";
import SectionTitle from "@/components/section-title";
import SkillBadge from "@/components/skill-badge";
import { USER_NAME } from "@/constants/app-configs";
import { ACTIVE_SKILLS, OTHERS_SKILLS } from "@/constants/skills";
import { cn } from "@/utils/cn";
import { toPascalSnakeCase, toScreamingSnakeCase } from "@/utils/string-case";
import { ArrowUpFromDot, LucideArrowDownSquare, MapPin, Rocket } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { ReactTyped } from "react-typed";

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const worksRef = useRef<HTMLDivElement | null>(null);

  const scrollToTop = () => {
    if (!scrollContainerRef.current) return;

    scrollContainerRef.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollTo = (ref: HTMLDivElement | null) => {
    if (!ref || !scrollContainerRef.current) return;

    scrollContainerRef.current.scrollTo({
      top: ref.offsetTop - 40, // margin分を固定値で調整してます
      behavior: "smooth",
    });
  };

  return (
    <div
      className={cn(
        "max-h-screen max-w-screen bg-base-500 text-text-500 overflow-hidden font-oswald tracking-wider relative leading-tight select-none",
      )}
    >
      <p className="hidden md:flex md:absolute md:bottom-0 md:left-10 overflow-visible inset-0 pointer-events-none text-[8vw] text-text-100 leading-tight font-black transform-[rotate(-45deg)]">
        WELCOME TO MY PORTFOLIO.
        {`HELLO, WORLD!! I'M ${toScreamingSnakeCase(USER_NAME)}.`} BASE IN JAPAN. {"I'M FRONT-END DEVELOPER."}
        BUILDING CLEAN WEB EXPERIENCES.
        CREATING RESPONSIVE WEBSITES.
        ALL DONE WITH PASSION.
        EXPLORING DESIGN AND LEARNING NEW SKILLS.
        DESIGNED & BUILT BY H MATSUSHITA.
      </p>

      <main className="sm:flex sm:justify-evenly sm:items-center max-w-screen h-screen">
        <div className="fixed bottom-0 left-0 items-end hidden md:flex z-10">
          <Image
            src="/profile_icon.png"
            alt="プロフィール画像"
            width={200}
            height={200}
            loading="lazy"
          />
        </div>

        <div className="flex max-h-screen overflow-hidden">

          <div className=" hello-world-wrapper hidden md:flex overflow-visible relative top-0 -right-45 tracking-normal">
            {/* 背面の文字（薄めの色など） */}
            <div className="absolute inset-1 font-pacifico text-9xl text-accent-400 transform-[rotate(-45deg)] select-none">
              <p>Hello,</p>
              <p>World!!</p>
            </div>

            {/* 前面の文字（現在のメイン） */}
            <div className="relative font-pacifico text-9xl text-text-500 transform-[rotate(-45deg)]">
              <p>Hello,</p>
              <p>World!!</p>
            </div>
          </div>

          <div
            ref={scrollContainerRef}
            className="h-screen sm:h-[90vh] w-full md:w-[380px] sm:justify-between sm:items-start bg-base-500 overflow-y-scroll sm:border-text-500 sm:border-8 z-1">
            <div className="flex flex-col h-full w-full">
              <section id="top" className="pl-0 pr-0">
                <div className="hero-container flex flex-col bg-text-500 text-base-500 p-8 md:min-h-[40vh]">
                  <p className="text-sm text-center text-base-600 mt-2 mb-2">Welcome to my portfolio.</p>

                  <div className="flex flex-col justify-center items-start">
                    <p className="text-xl text-start wrap-break-word">
                      {"Hello, I'm"}
                    </p>
                    <p className="text-4xl font-extrabold font-lime-light w-full text-center mb-1">{toScreamingSnakeCase(USER_NAME)}</p>
                  </div>
                  <div className="flex justify-end items-center gap-1.5">
                    <h6 className="flex justify-start items-center text-xs">
                      <MapPin className="w-4 animate-in fade-in zoom-in" /> Hokkaido, Japan
                    </h6>
                    <a href="https://github.com/zest-matsushita" target="_blank">
                      <i className="devicon-github-original text-xl"></i>
                    </a>
                  </div>

                  <p className="flex items-baseline-last gap-1 text-2xl">
                    <span className="text-xl text-start wrap-break-word">
                      {"I'm a"}
                    </span>
                    <span className="font-extrabold text-accent-500">Front-End Developer</span>,
                  </p>

                  <h1>
                    <ReactTyped
                      className="text-xl min-h-10"
                      strings={[
                        "Building clean web experiences.",
                        "Creating responsive websites.",
                        "All done with passion.",
                        "Exploring design and learning new skills."
                      ]}
                      typeSpeed={60}
                      backSpeed={20}
                      backDelay={2000}
                      loop
                      showCursor
                      cursorChar="|"
                    />
                  </h1>
                </div>
                <div className="relative -top-0.5 shaped h-[120px]"></div>
              </section>

              <section id="skills" className="pl-0 pr-0" ref={skillsRef}>
                <div className="skills-container flex flex-col">
                  <SectionTitle title="SKILLS" />
                  <div className="grid grid-cols-4 gap-2 mx-autos mx-4">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className={cn("min-w-1/4 flex justify-center items-end font-pacifico font-medium text-accent-500")}>
                      <span className="text-[8px] font-extrabold">＼</span>
                      <DeviceActionLabel />
                      <span className="text-[8px] font-extrabold">／</span>
                    </div>

                    <div className="flex items-center justify-center my-2">
                      <div className="flex items-center justify-center my-2">
                        <h2 className="text-xl font-bold">
                          Active
                        </h2>
                      </div>
                    </div>

                    {/* Active 現在活発 */}
                    {ACTIVE_SKILLS.map((skill, index) => (
                      <div key={index} className="aspect-square min-w-1/4">
                        <SkillBadge skill={skill} className="bg-base-200" />
                      </div>
                    ))}

                    <div className="flex items-center justify-center my-2">
                      <h2 className="text-xl font-bold">
                        Others
                      </h2>
                    </div>

                    {/* Others 経験あり */}
                    {OTHERS_SKILLS.map((skill, index) => (
                      <div key={index} className="aspect-square">
                        <SkillBadge skill={skill} className="" />
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section id="works" ref={worksRef}>
                <div className="works-container flex flex-col">
                  <SectionTitle title="WORKS" />
                  <EmblaCarousel />
                </div>
              </section>

              {/* PageTopボタン */}
              <button className="cursor-pointer flex justify-evenly items-center gap-1 mx-auto my-5 p-2 bg-text-500 text-base-500 rounded-lg" onClick={() => scrollToTop()}>
                Page TOP
                <ArrowUpFromDot className="cursor-pointer" size={18} />
              </button>

              <div className="flex justify-center items-end gap-0.5 bg-text-500 text-base-300 px-2 py-3">
                <p className="text-xs ">
                  © {new Date().getFullYear()} - Designed & Built by  {toPascalSnakeCase(USER_NAME)}
                </p>
                <Rocket size={14} />
              </div>
            </div>
          </div>
          <div className="justify-between items-start hidden sm:flex flex-col sm:h-[90vh] pb-5">
            {/* メニュー */}
            <div className="hidden sm:flex ml-1 z-1">
              <ul className="text-2xl font-bold">
                <li className="cursor-pointer" onClick={() => scrollToTop()}><span className="text-3xl">T</span><span className="text-md text-accent-500">OP</span></li>
                <li className="cursor-pointer" onClick={() => scrollTo(skillsRef.current)}><span className="text-3xl text-accent-500">S</span><span>KILLS</span></li>
                <li className="cursor-pointer" onClick={() => scrollTo(worksRef.current)}><span className="text-3xl">W</span><span className="text-md text-accent-500">ORKS</span></li>
              </ul>
            </div>
            <div className="flex flex-col gap-1 items-center justify-evenly z-10 animate-bounce">
              <p className="text-xl font-lime-light [writing-mode:vertical-rl] w-auto ">{"scroll"}</p>
              <LucideArrowDownSquare />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}