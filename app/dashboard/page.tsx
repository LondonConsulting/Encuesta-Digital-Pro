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
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"

export default function Page() {
  return (
    <>
      <header className="flex h-16 shrink-0 items-center justify-between border-b px-4">
        <div className="flex items-center gap-2">
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList className="flex items-center">
              <div className="flex items-center h-16">
                <Image
                  src="/london-consulting-group-logo.png"
                  alt="Logo"
                  width={100}
                  height={40}
                  className="block dark:hidden object-contain"
                />
                <Image
                  src="/londonlogodark.png"
                  alt="Logo"
                  width={100}
                  height={40}
                  className="hidden dark:block object-contain"
                />
              </div>
              <Separator orientation="vertical" className="mx-2 h-4" />
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
        </div>
        <ThemeToggle />
        </header>
        <div className="flex-1 p-4">
          <SurveyProvider>
            <SurveyFlow />
          </SurveyProvider>
        </div>
    </>
  )
}
