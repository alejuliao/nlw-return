import { CloseButton } from "../CloseButton";

import bugImageUrl from '../../assets/bug.svg'
import ideiaImageUrl from '../../assets/ideia.svg'
import thoughtImageUrl from '../../assets/thought.svg'
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypesStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const feedbackTypes = {
  BUG: {
    title: 'Problema', image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto'
    }
  },
  IDEIA: {
    title: 'Ideia', image: {
      source: ideiaImageUrl,
      alt: 'imagem de uma lampada'
    }
  },
  OTHER: {
    title: 'Outro', image: {
      source: thoughtImageUrl,
      alt: 'imagem de um balão'
    }
  },
}
export type FeedbackType = keyof typeof feedbackTypes
export function WidgetForm() {
  const [feedbackType, setFeedbackTypes] = useState<FeedbackType | null>(null)
  return (
    //   <header>

    //   <span className="text-xl leading-6">Deixe seu feedback</span>
    //   <CloseButton />
    // </header>
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2em)] md:w-auto">
      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackTypes} />
      ) : (
        <FeedbackContentStep feedbackType={feedbackType} />
      )}
      <footer className="text-xs text-neutral-400">
        Feito pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>
      </footer>
    </div>
  )
}