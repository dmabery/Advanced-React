import NProgress from "nprogress";
import Router from "next/router";
import Page from "../components/Page";

import '../components/styles/nprogress.css';
import { ApolloProvider } from "@apollo/client";
import withData from "../lib/withData";
import { Component } from "react";

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps, apollo }) {
    console.log(apollo)
    return (
        <ApolloProvider client={apollo} >
            <Page>
                <Component {...pageProps} />
            </Page>
        </ApolloProvider>
    );
}

// if any of the pages have a getInitialProps, fetch that and wait to serve the page

MyApp.getInitalProps = async function({ Component, ctx }) {
    let pageProps = {};
    if(Component.getInitalProps) {
        pageProps = await Component.getInitalProps(ctx);
    }
    pageProps.query = ctx.query;
    return { pageProps };
}

export default withData(MyApp);