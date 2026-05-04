import { useMutation } from "@tanstack/react-query";

type FormData = {
  name: string;
  email: string;
  message: string;
};

async function sendMessage(data: FormData) {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await res.json();

  if (!res.ok || !result.success) {
    throw new Error(result.error || "Failed to send message");
  }

  return result;
}

export function useContactMutation() {
  return useMutation({
    mutationFn: sendMessage,
  });
}
