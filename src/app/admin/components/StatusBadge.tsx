export function StatusBadge({ status }: { status: string }) {
  const colors: any = {
    NOVO: "bg-green-600",
    RESPONDIDO: "bg-blue-600",
    EM_ANDAMENTO: "bg-yellow-600",
    FINALIZADO: "bg-purple-600",
    CANCELADO: "bg-red-600",
  };

  return (
    <div className="flex justify-center items-center">
      <span className={`px-1 py-1 rounded-full text-xs mr-2 ${colors[status]}`}></span>
      {status}
    </div>
  );
}
