import { deepseek } from "@inngest/ai/models";
import { inngest } from "./client";
import { createAgent } from '@inngest/agent-kit';

export const helloWorld = inngest.createFunction(
    { id: "hello-world" },
    { event: "test/hello.world" },
    async ({ event, step }) => {

        const codeAgent = createAgent({
            name: 'codeAgent',
            system: '你是一位精通 Next.js 的专家开发者，擅长编写可读性强、易于维护的代码，能够高效输出简洁的 Next.js 和 React 示例代码。',
            model: deepseek({
                apiKey: process.env.DEEPSEEK_API_KEY!,
                model: "deepseek-chat",
            }),
        });

        console.log("1")


        const { output } = await step.run("call-codeAgent", async () => {
            return await codeAgent.run(
                `请根据以下描述编写代码片段：${event.data.value}`
            );
        });

        console.log("output", output);
        return {
            output,
        };
    },
);
