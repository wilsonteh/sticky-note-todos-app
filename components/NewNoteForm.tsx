"use client"
import { insertRecord } from "@/lib/supabaseUtils";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import { PostgrestError } from "@supabase/supabase-js";

type NewNoteInput = {
  title: string;
  description: string;
}

const NewNoteForm = () => {
  const [isLoading , setIsLoading] = useState<boolean>(false);
  const [formSubmitError, setFormSubmitError] = useState<PostgrestError | null>();
  const [showSubmitError, setShowSubmitError] = useState<boolean>(false);

  const submitErrorRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { 
    register, handleSubmit, resetField, watch, formState: { errors } 
  } = useForm<NewNoteInput>();

  const handleFormSubmit = async (data: NewNoteInput) => {
    setIsLoading(true);
    const { error } = await insertRecord("notesssss", data)
    setIsLoading(false);

    if (error) {
      setFormSubmitError(error)
      setShowSubmitError(true)
    } 
    resetField("title")
    resetField("description")
    router.refresh();
  }; 

  function handleTransitionEnd() {
    console.log("transition ended");
    if (!showSubmitError) {
      submitErrorRef.current?.remove();
    }
  }

  return (
    <>
      { formSubmitError && 
      <div ref={submitErrorRef} className={`bg-red-200 text-red-700 px-4 py-[6px] mt-2 text-sm 
      rounded-md border-[.5px] border-red-700 flex justify-between items-center
      transition-opacity duration-500 ease-in-out opacity-${showSubmitError ? "100" : "0"}
      ${showSubmitError ? 'flex' : 'hidden'} `} 
      onTransitionEnd={handleTransitionEnd}
      >
        <div className="flex flex-col">
          <div>{ formSubmitError.details }</div>
          <div>{ formSubmitError.hint }</div>
          <div>{ formSubmitError.message }</div>
        </div>
        <div className="cursor-pointer px-2 py-1 rounded-full hover:bg-red-300 hover:scale-110" 
          onClick={() => setShowSubmitError(false)}>
          <FontAwesomeIcon icon={faXmark} className="text-lg flex justify-center items-center" />
        </div>
      </div> }

      <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col gap-4 border-[1px]
      border-gray-700 w-[400px] mx-auto mt-4 p-4 text-sm" >
        
        <div className="flex flex-col">
          <label htmlFor="title" className="font-medium cursor-pointer">
            Title
          </label>
          <input type="text" id="title" className={`outline-0 border-[1px] border-gray-700 
            px-2 py-1 focus:border-2 ${errors.title ? "focus:border-red-500 border-red-500" : ""}`}
            placeholder="Note Title"
            {...register("title", { 
              required: "Title cannot be left empty", 
              minLength: {
                value: 4,
                message: "Title must be at least 4 characters long"
              }})} 
            /> 
          { errors.title?.type && 
          <small className="bg-red-100 text-red-500 text-xs flex items-center gap-1 mt-1
            rounded-sm px-1 py-[2px]"> 
            <FontAwesomeIcon icon={faCircleExclamation} />
            { errors.title.message } 
          </small> }
        </div>

        <div className="flex flex-col">
          <label htmlFor="description" className="font-medium cursor-pointer">Description</label>
          <textarea id="description" className={`outline-0 border-[1px] border-gray-700 px-2 py-1
            focus:border-2 ${errors.description ? "focus:border-red-500 border-red-500" : ""}`} 
            placeholder="Note Description" 
            {...register("description", { 
              required: "Description cannot be left empty", 
              minLength: {
                value: 5, 
                message: "Description must be at least 5 characters long"
              } 
              })}  
            />
          { errors.description?.type && 
          <small className="bg-red-100 text-red-500 text-xs flex items-center gap-1 mt-1
          rounded-sm px-1 py-[2px]"> 
            <FontAwesomeIcon icon={faCircleExclamation} />
            { errors.description.message } 
          </small> }
        </div>

        <button type="submit" className={`text-gray-100  px-4 py-2 rounded-full font-medium  
          ${isLoading ? "bg-indigo-300 hover:bg-indigo-300" : "bg-indigo-500 hover:bg-indigo-600"}`}
          >
          { isLoading ? "Adding Sticky Note..." : "Add Sticky Note"}
        </button>
      </form>


    </>
  );
}
 
export default NewNoteForm;