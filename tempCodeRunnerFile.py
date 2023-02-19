response = openai.Completion.create(
#   model="text-davinci-003",
#   prompt="Below are two paragraphs para1, para2. Tell if para2 means the same as para1. Para1 might be a much general statement of para2.\npara1: The highest priority feature when purchasing a laptop should be the processor. The processor is the most important component of a laptop, as it determines the speed and performance of the laptop. A laptop with a powerful processor will be able to handle more tasks and run more demanding applications.\npara2: The speed and performance of a laptop should be given the highest priority when prchasing a laptop.\n\nAnswer with yes or no: ",
#   temperature=0,
#   max_tokens=10,
#   top_p=1,
#   frequency_penalty=0,
#   presence_penalty=0
# )

# print(response.choices[0].text)