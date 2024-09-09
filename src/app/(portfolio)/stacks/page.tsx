import { IconCloudDemo } from "@/components";

export default function StacksPage() {
    return (
      <div className="flex flex-col">
        <div>
          <h1 className="text-4xl font-bold mb-6">Herramientas que uso</h1>
          <p className="mb-10">Estas son algunas herramientas que utilizo</p>
        </div>
        <div className="flex justify-center items-center">
          <IconCloudDemo />
        </div>
        

      </div>
     
    );
  }