import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { SurveyProvider } from "@/lib/context/survey-context"
import { SurveyFlow } from "@/components/survey/survey-flow"
import Image from "next/image"

export default function Page() {
  return (
    <>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
            <Image src="/london-consulting-group-logo.png" alt="Logo" width={100} height={100} />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Encuesta de Madurez Digital
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Evaluación</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex-1 p-4">
          <SurveyProvider>
            <SurveyFlow />
          </SurveyProvider>
        </div>
    </>

  )
}
