import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv('data/clean/ugyldige-stemmer-2019.csv')

df.plot(kind = 'scatter', x = 'gyldige stemmer i alt', y = 'ugyldige stemmer i alt (1+2)')

plt.show() 