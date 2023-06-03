"use client";

import { useState } from "react";

export default function Page() {
  // Constants
  const correctAnswer = "bomb";
  const wrongAnswersAndTheirResponses = [
    {
      answer: "tajju",
      response: "Nope, stop being self obsessed",
    },
    {
      answer: "shareef",
      response: "really bro? you call me that?",
    },
    {
      answer: "moiz",
      response: "Uska timezone alag hai bro :/",
    },
    {
      answer: "asad",
      response: "Baath nakko karruo ab tum, hamare se",
    },
    {
      answer: "khizer",
      response:
        "Unho abhi tarkeeb bana rai bro, sunch rai shareef abhi tak maloom karra ya nai... aur tension nakko de unku",
    },
  ];
  const worstWrongAnswer = "mujtaba";
  const surprise = localStorage.getItem("surprise") as
    | "true"
    | "false"
    | "worst"
    | null;

  // State
  const [answer, setAnswer] = useState<string>("");

  // Functions
  function answerHandler() {
    if (surprise === "worst") {
      return;
    }

    const formattedAnswer = answer.trim().toLowerCase();

    if (!answer) {
      alert("Enter the name of your best friend first");
      return;
    }

    if (formattedAnswer === correctAnswer) {
      localStorage.setItem("surprise", "true");
      return;
    }

    localStorage.setItem("surprise", "false");

    if (formattedAnswer === worstWrongAnswer) {
      localStorage.setItem("surprise", "worst");
      return;
    }

    wrongAnswersAndTheirResponses.forEach((wrongAnswerAndResponse) => {
      if (formattedAnswer === wrongAnswerAndResponse.answer) {
        alert(wrongAnswerAndResponse.response);
        return;
      }
    });

    if (
      !wrongAnswersAndTheirResponses.some((x) => x.answer === formattedAnswer)
    ) {
      alert(`${answer} oh Really?`);
    }
  }

  if (surprise === "true") {
    return (
      <main
        className={`bg-p-green h-screen container w-screen flex flex-col justify-center items-center`}
      >
        <section>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </section>
        <h1 className={`text-3xl text-justify`}>
          Decode the words of &quot;Shareef who keeps everything a secret&quot;
          and you should get your final surprise.
        </h1>
      </main>
    );
  }

  return (
    <main
      className={`bg-p-green h-screen container w-screen flex flex-col justify-center items-center ${
        surprise === "worst" && "bg-black"
      }`}
    >
      <h1
        className={`text-3xl text-justify ${
          surprise === "worst" && "text-black"
        }`}
      >
        Wait bro, First you have to enter the name of your best friend
      </h1>
      <h1
        className={`text-3xl text-justify mt-4 ${
          surprise === "worst" && "text-black"
        }`}
      >
        The answer will determine whether you are worthy of the surprise or not
      </h1>

      <div className="mt-8">
        <input
          type="text"
          className={`bg-p-orange w-full text-p-blue text-3xl mt-8 px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out 
            ${surprise === "worst" && "bg-black text-black"}
          `}
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          disabled={surprise === "worst"}
        />
        <button
          className={`bg-p-blue text-p-green text-3xl mt-8 px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out
            ${surprise === "worst" && "bg-black text-black"}
          `}
          onClick={answerHandler}
          disabled={surprise === "worst"}
        >
          Check out the Surprise
        </button>
      </div>
    </main>
  );
}
