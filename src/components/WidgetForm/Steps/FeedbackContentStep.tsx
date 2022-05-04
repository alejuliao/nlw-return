
import { ArrowLeft } from "phosphor-react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";
interface FeedbackContentStep {
  feedbackType: FeedbackType;
}
export function FeedbackContentStep({ feedbackType }: FeedbackContentStep) {
  const feedbackTypeInfo = feedbackTypes[feedbackType]
  return (
    <>
      <header>
        <button type="button" className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100">
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className="text-xl leading-6  flex items-center gap-2">
          <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} />
          {feedbackTypeInfo.title}
        </span>
        <CloseButton />
      </header>
    </>
  )
}