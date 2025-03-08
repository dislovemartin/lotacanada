import React from 'react';
import { signOut } from 'next-auth/react';
import Layout from '../../components/Layout';

/**
 * Custom sign-out page for NextAuth.js
 */
export default function SignOut() {
  return (
    <Layout>
      <div className="page">
        <h1>Sign Out</h1>
        <p>Are you sure you want to sign out?</p>
        <div className="button-container">
          <button
            onClick={() => signOut({ callbackUrl: '/' })}
            className="button signout-button"
          >
            Yes, sign me out
          </button>
          <button
            onClick={() => window.location.href = '/'}
            className="button cancel-button"
          >
            Cancel
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
            margin-bottom: 1rem;
          }
          p {
            margin-bottom: 2rem;
            font-size: 1.1rem;
          }
          .button-container {
            display: flex;
            justify-content: center;
            gap: 1rem;
          }
          .button {
            padding: 0.75rem 1.5rem;
            border: none;
            border-radius: 4px;
            font-size: 1rem;
            cursor: pointer;
            transition: background-color 0.2s ease;
          }
          .signout-button {
            background-color: #e53e3e;
            color: white;
          }
          .signout-button:hover {
            background-color: #c53030;
          }
          .cancel-button {
            background-color: #e2e8f0;
            color: #1a202c;
          }
          .cancel-button:hover {
            background-color: #cbd5e0;
          }
        `}</style>
      </div>
    </Layout>
  );
}
