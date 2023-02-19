import openai
# send prompt to API adn return result

openai.api_key = "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"

def generatePrompt(ans1, ans2):
    return "Below are two paragraphs para1, para2. Check if para2 means the same as para1. para2 might be a much general statement of para1.\npara1 :" + ans1 + "para2 :" + ans2 + "\nAnswer yes or no and give percentage with the format 'YES/NO - Percentage': "

def generate(prompt):
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=prompt,
        temperature=0,
        max_tokens=100,
    )
    return response

ans1 = "I love doctors"
ans2 = "I hate doctors"

print(generate(generatePrompt(ans1, ans2)).choices[0].text)