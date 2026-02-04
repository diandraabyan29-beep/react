import { Component } from "react"
import type { ReactNode } from "react"

export class ErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError)
      return <p className="text-red-500">Terjadi kesalahan</p>
    return this.props.children
  }
}
