import React from 'react';
import { getProviders, signIn } from 'next-auth/react';
import Layout from '../../components/Layout';
import { GetServerSideProps } from 'next';

type Provider = {
  id: string;
  name: string;
  type: string;
};

type SignInProps = {
  providers: Record<string, Provider>;
};

/**
 * Custom sign-in page for NextAuth.js
 */
export default function SignIn({ providers }: SignInProps) {
  return (
    <Layout>
      <div className="page">
        <h1>Sign In</h1>
        <div className="signin-container">
          {Object.values(providers).map((provider) => (
            <div key={provider.name} className="provider-button">
              <button
                onClick={() => signIn(provider.id, { callbackUrl: '/' })}
                className="button"
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
        <style jsx>{`
          .page {
            padding: 2rem;
            max-width: 600px;
            margin: 0 auto;
          }
          h1 {
            font-size: 2rem;
            font-weight: 600;
            margin-bottom: 2rem;
            text-align: center;
          }
          .signin-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          }
          .provider-button {
            width: 100%;
            max-width: 300px;
          }
          .button {
            width: 100%;
            padding: 0.75rem 1rem;
            background-color: #000;
            color: #fff;
            border: none;
            border-radius: 4px;
            font-size: 1rem;
            cursor: pointer;
            transition: background-color 0.2s ease;
          }
          .button:hover {
            background-color: #333;
          }
        `}</style>
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders();
  return {
    props: { providers },
  };
};
