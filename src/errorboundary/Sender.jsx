import React from 'react'
import Receiver from "./Receiver"
import ErrorBoundary from "./ErrorBoundary"

const Sender = () => {
  return (
    <>
        <ErrorBoundary>
            <Receiver money = {10000}/>
        </ErrorBoundary>
        <ErrorBoundary>
            <Receiver money = {30000}/>
        </ErrorBoundary>
        <ErrorBoundary>
            <Receiver money = {50000}/>
        </ErrorBoundary>
    </>
  );
}

export default Sender