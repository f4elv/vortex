"use client";

import Button from "../ui/button";

interface ModalProps {
  onClose: () => void;
}

export default function ConfirmationModal({ onClose }: ModalProps) {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-xl flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-[#111] border border-white/10 rounded-3xl p-6 sm:p-10 max-w-lg w-full shadow-xl shadow-purple-500/20">
        <h2 className="text-3xl font-bold text-center mb-6">
          Confirmação
        </h2>
        
        <ul className="flex flex-col gap-2">
            <li>• Revisaremos os detalhes enviados</li>
            <li>• Montaremos o design ideal</li>
            <li>• Retornaremos em até 48h pelo número fornecido</li>
        </ul>
        <div className="flex justify-center items-center gap-4 mt-6">
          <Button
            variant="secondary"
            onClick={onClose}
            className="w-full"
          >
            Fechar
          </Button>
          <Button
            variant="primary"
            className="w-full"
          >
            Agendar Reunião
          </Button>
        </div>
      </div>
    </div>
  );
}
