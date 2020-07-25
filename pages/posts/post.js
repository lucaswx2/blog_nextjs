import React from "react";
import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstPost() {
  return <Layout></Layout>;
}

export async function getStaticPaths() {}

export async function getStaticProps({ params }) {}
