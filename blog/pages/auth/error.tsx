import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

/**
 * Custom error page for NextAuth.js authentication errors
 */
export default function Error() {
  const router = useRouter();
  const { error } = router.query;

  const getErrorMessage = (errorCode: string) => {
    switch (errorCode) {
      case 'Configuration':
        return 'There is a problem with the server configuration.';
      case 'AccessDenied':
        return 'You do not have permission to sign in.';
      case 'Verification':
        return 'The verification link has expired or has already been used.';
      case 'OAuthSignin':
      case 'OAuthCallback':
      case 'OAuthCreateAccount':
      case 'EmailCreateAccount':
      case 'Callback':
        return 'There was a problem with the authentication service.';
      case 'OAuthAccountNotLinked':
        return 'To confirm your identity, sign in with the same account you used originally.';
      case 'EmailSignin':
        return 'The email could not be sent.';
      case 'CredentialsSignin':
        return 'The sign in details you provided were invalid.';
      case 'SessionRequired':
        return 'Please sign in to access this page.';
      default:
        return 'An unexpected error occurred.';
    }
  };

  return (
    <Layout>
      <div className="page">
        <h1>Authentication Error</h1>
        <div className="error-container">
          <p className="error-message">{error ? getErrorMessage(error as string) : 'An unexpected error occurred.'}</p>
          <button
            onClick={() => router.push('/')}
            className="button home-button"
          >
            Return to Home
          </button>
        </div>
        <style jsx>{`
          .page {
            padding: 2rem;
            max-width: 600px;
            margin: 0 auto;
            text-align: center;
          }
          h1 {
            font-size: 2rem;
            font-weight: 600;
            margin-bottom: 2rem;
            color: #e53e3e;
          }
          .error-container {
            background-color: #fff5f5;
            border: 1px solid #fed7d7;
            border-radius: 8px;
            padding: 2rem;
          }
          .error-message {
            margin-bottom: 2rem;
            font-size: 1.1rem;
            color: #e53e3e;
          }
          .button {
            padding: 0.75rem 1.5rem;
            border: none;
            border-radius: 4px;
            font-size: 1rem;
            cursor: pointer;
            transition: background-color 0.2s ease;
          }
          .home-button {
            background-color: #3182ce;
            color: white;
          }
          .home-button:hover {
            background-color: #2c5282;
          }
        `}</style>
      </div>
    </Layout>
  );
}
