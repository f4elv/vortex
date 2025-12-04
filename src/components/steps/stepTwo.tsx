"use client";

import { useState } from "react";
import Button from "../ui/button";
import { formData, ProjectType } from "@/lib/utils";
import { StepTwoSchema } from "@/lib/formSchema";

interface StepTwoProps {
  onSubmit: () => void;
  onBack: () => void;
  updateField: (field: string, value: any) => void;
  data: formData;
}


export default function StepTwo({ onSubmit, onBack, updateField, data}: StepTwoProps) {
  const [type, setType] = useState("LANDING_PAGE");
  const options = Object.keys(ProjectType) as Array<keyof typeof ProjectType>;
  const [error, setErrors] = useState<any>()

  function handleNext() {
    console.log("função chamada")
    const result = StepTwoSchema.safeParse(data);

    if (!result.success) {
      setErrors(result.error.flatten().fieldErrors);
      return;
    }

    setErrors({});
    onSubmit();
  }

  return (
    <div className="
      w-full max-w-4xl
      bg-white/5 border border-white/10 backdrop-blur-xl
      rounded-3xl p-6 sm:p-10
      shadow-lg animate-fade-in
    ">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center">
        Qual o estilo do site que você busca criar
      </h2>

      <p className="text-center mb-10 text-sm sm:text-base">
        Escolha uma direção. O projeto final será ajustado na call.
      </p>

      {error?.projectType && (
        <p className="text-red-500 text-sm mb-2 animate-fade-in text-center">{error.projectType[0]}</p>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
        {options.map((item) => (
          <button
            key={item}
            onClick={() => {
              setType(item);
              updateField("projectType", item);
              console.log(item)
            }}
            className={`
              py-3 rounded-xl border transition text-sm sm:text-base
              ${type === item
                ? "bg-purple-600 border-purple-400"
                : "bg-black/20 border-white/10"
              }
            `}
          >
            {ProjectType[item]}
          </button>
        ))}
      </div>

      
      <textarea
        rows={5}
        className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 focus:border-purple-500 outline-none transition mb-8"
        placeholder="Detalhes adicionais (opcional)"
        value={data.extraDetails || ""}
        onChange={(e) => updateField("extraDetails", e.target.value)}
      />

      <div className="flex flex-col sm:flex-row w-full justify-center items-center gap-4 sm:gap-6">
        <Button
          onClick={onBack} 
          variant="secondary"
           className="w-full"
        >
          Voltar
        </Button>
        <Button 
          onClick={handleNext} 
          variant="primary"
          className="w-full"
        >
          Confirmar solicitação
        </Button>
      </div>
    </div>
  );
}
