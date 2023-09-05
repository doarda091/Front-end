alturas = []
generos = []

for i in range(15):
    altura = float(input("Digite a sua altura: "))
    genero = input("Digite o seu gênero (H ou M): ").upper()
    
    alturas.append(altura)
    generos.append(genero)

MA = max(alturas)
MNA = min(alturas)

AH= [altura for altura, genero in zip(alturas, generos) if genero == 'H']
MAH = sum(AH) / len(AH) if AH else 0

NM = generos.count('M')

print(f"A maior altura do grupo é: {MA} M")
print(f"A menor altura do grupo é: {MNA} M")
print(f"A média de altura dos homens é: {MAH:.2f} M")
print(f"O número de mulheres é: {NM}")