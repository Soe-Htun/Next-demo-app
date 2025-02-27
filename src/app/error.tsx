"use client";
import React, { Component, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  handleReload = () => {
    this.setState({ hasError: false });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
          <h1 className="text-5xl font-bold text-red-600">Something went wrong</h1>
          <p className="text-lg text-gray-700 mt-4">An unexpected error occurred.</p>
          <button
            onClick={this.handleReload}
            className="mt-6 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
          >
            Reload Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
