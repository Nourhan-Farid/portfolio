import { Download } from "lucide-react";

export default function CVDownLoad() {
  return (
    <div>
      <a
        href="/assets/Nourhan-Farid-CV.pdf"
        download
        className="px-4 flex justify-evenly justify-items-center py-2 text-white rounded"
      >
        Download CV
        <Download className="ms-1" />
      </a>
    </div>
  );
}
