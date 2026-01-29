import { useState } from 'react';
import { Mail, Check, AlertCircle } from 'lucide-react';

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

export function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setErrorMessage('Please enter your email address');
      setStatus('error');
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
      setEmail('');
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setErrorMessage('Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl blur-3xl -z-10" />
        
        <div className="relative bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 sm:p-10">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 mb-4">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Stay Updated
            </h3>
            <p className="text-slate-300 text-sm sm:text-base">
              Get the latest articles, tutorials, and insights delivered to your inbox
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300" />
              
              <div className="relative flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  placeholder="Enter your email"
                  className={`flex-1 px-4 py-3 rounded-lg bg-slate-800/50 border transition-all duration-300 focus:outline-none focus:ring-2 ${
                    status === 'error'
                      ? 'border-red-500/50 focus:ring-red-500/50'
                      : 'border-slate-700/50 focus:border-cyan-500/50 focus:ring-cyan-500/50'
                  } text-white placeholder-slate-400`}
                  disabled={status === 'loading' || status === 'success'}
                />
                
                <button
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap ${
                    status === 'success'
                      ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                      : status === 'loading'
                      ? 'bg-slate-700 text-slate-400 cursor-wait'
                      : 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 active:scale-95'
                  }`}
                >
                  {status === 'loading' && (
                    <div className="w-4 h-4 border-2 border-slate-300 border-t-transparent rounded-full animate-spin" />
                  )}
                  {status === 'success' && (
                    <Check className="w-4 h-4" />
                  )}
                  {status === 'idle' || status === 'error' ? 'Subscribe' : status === 'success' ? 'Subscribed!' : 'Subscribing...'}
                </button>
              </div>
            </div>

            {/* Error message */}
            {status === 'error' && (
              <div className="flex items-center gap-2 text-red-400 text-sm animate-in fade-in slide-in-from-top-2 duration-300">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Success message */}
            {status === 'success' && (
              <div className="flex items-center gap-2 text-green-400 text-sm animate-in fade-in slide-in-from-top-2 duration-300">
                <Check className="w-4 h-4 flex-shrink-0" />
                <span>Thanks for subscribing! Check your email for confirmation.</span>
              </div>
            )}
          </form>

          {/* Footer text */}
          <p className="text-center text-xs text-slate-400 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
}
