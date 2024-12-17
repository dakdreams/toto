"use server";

import prisma from "@/lib/db";
import { Articles } from "@prisma/client";

import { revalidatePath } from "next/cache";

export async function createArticles(FormData: Articles) {
  await prisma.articles.create({
    data: {
      article: FormData.article,
      marque: FormData.marque,
      prix1: FormData.prix1,
      prix2: FormData.prix2,
      prix3: FormData.prix3,
    },
  });
  revalidatePath("/articles");
}
