import type { Metadata } from "next"
import EthicalAIAgents from "@/components/manus-imports/ethical-ai-agents"

export const metadata: Metadata = {
  title: "Ethical AI Agents | Manus Imports",
  description: "B2B services page for AI governance and ethical AI consulting.",
  alternates: {
    canonical: "https://dr-dede.com/manus-imports/ai-agents",
  },
}

export default function AIAgentsPage() {
  return <EthicalAIAgents />
}
