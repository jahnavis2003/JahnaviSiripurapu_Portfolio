import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught an error:', error, info);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="h-screen flex items-center justify-center bg-black text-center p-6">
          <div className="bg-black shadow-xl rounded-2xl p-8 max-w-md w-full">
            <h1 className="text-2xl font-semibold text-red-500 mb-4">Oops! Something went wrong.</h1>
            <p className="text-gray-600 mb-6">We're sorry for the inconvenience. Please try reloading the page.</p>
            <button
              onClick={this.handleReload}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
