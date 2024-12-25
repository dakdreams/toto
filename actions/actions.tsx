"use server";

import prisma from "@/lib/db";
import { Articles, Credits } from "@prisma/client";

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

export async function createCredits(FormData: Credits) {
  await prisma.credits.create({
    data: {
      amount: FormData.amount,
      nom: FormData.nom,
      status: FormData.status,
      date: FormData.date,
    },
  });
  revalidatePath("/credits");
}
