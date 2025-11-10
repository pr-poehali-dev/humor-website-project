import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HumorType {
  id: string;
  title: string;
  description: string;
  example: string;
  explanation: string;
  image: string;
  color: string;
}

const humorTypes: HumorType[] = [
  {
    id: 'irony',
    title: 'Ирония',
    description: 'Скрытое насмешливое противоречие между сказанным и подразумеваемым',
    example: '"Какая прекрасная погода!" — говорит человек под проливным дождём',
    explanation: 'Ирония строится на контрасте между буквальным значением слов и реальной ситуацией. Это тонкий юмор, требующий понимания контекста.',
    image: 'https://cdn.poehali.dev/projects/77f6143c-91cb-428f-848f-b1735c1d46ca/files/8e73610c-296b-43bd-8aae-8257b0c168b7.jpg',
    color: 'bg-primary/10'
  },
  {
    id: 'sarcasm',
    title: 'Сарказм',
    description: 'Едкая, язвительная насмешка, часто с целью высмеять или обидеть',
    example: '"Ну ты гений, конечно!" — после очередной глупой ошибки',
    explanation: 'Сарказм — это агрессивная форма иронии. В отличие от иронии, сарказм всегда направлен на критику и может ранить.',
    image: 'https://cdn.poehali.dev/projects/77f6143c-91cb-428f-848f-b1735c1d46ca/files/8e73610c-296b-43bd-8aae-8257b0c168b7.jpg',
    color: 'bg-secondary/10'
  },
  {
    id: 'satire',
    title: 'Сатира',
    description: 'Обличение пороков общества через высмеивание',
    example: 'Басни Крылова, высмеивающие человеческие слабости через образы животных',
    explanation: 'Сатира использует юмор как инструмент социальной критики. Она высмеивает не конкретных людей, а общественные явления и пороки.',
    image: 'https://cdn.poehali.dev/projects/77f6143c-91cb-428f-848f-b1735c1d46ca/files/be57e73e-30ab-413e-915b-846eeffbcffd.jpg',
    color: 'bg-accent/20'
  },
  {
    id: 'dark',
    title: 'Чёрный юмор',
    description: 'Шутки на серьёзные, табуированные или трагические темы',
    example: '"Я не говорю, что моя работа убивает, но на моём столе есть кладбище проектов"',
    explanation: 'Чёрный юмор помогает справиться со страхом и тревогой через смех над тем, что обычно вызывает дискомфорт.',
    image: 'https://cdn.poehali.dev/projects/77f6143c-91cb-428f-848f-b1735c1d46ca/files/be57e73e-30ab-413e-915b-846eeffbcffd.jpg',
    color: 'bg-muted/50'
  },
  {
    id: 'absurd',
    title: 'Абсурд',
    description: 'Юмор, основанный на нелогичности и бессмысленности ситуаций',
    example: '"Почему курица перешла дорогу? Чтобы доказать опоссуму, что это возможно"',
    explanation: 'Абсурдный юмор нарушает логику и ожидания, создавая комичность через несоответствие и неожиданность.',
    image: 'https://cdn.poehali.dev/projects/77f6143c-91cb-428f-848f-b1735c1d46ca/files/b2f1c5ce-9954-4a03-8fc8-3e93093b83e3.jpg',
    color: 'bg-primary/20'
  },
  {
    id: 'wordplay',
    title: 'Игра слов',
    description: 'Юмор, построенный на двусмысленности или схожести слов',
    example: '"Я не лысый, я просто выше своих волос"',
    explanation: 'Игра слов использует омонимы, созвучия и многозначность для создания комического эффекта.',
    image: 'https://cdn.poehali.dev/projects/77f6143c-91cb-428f-848f-b1735c1d46ca/files/b2f1c5ce-9954-4a03-8fc8-3e93093b83e3.jpg',
    color: 'bg-secondary/20'
  }
];

const Index = () => {
  const [selectedHumor, setSelectedHumor] = useState<HumorType | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <header className="text-center mb-16 space-y-4">
          <div className="inline-block mb-4">
            <Badge variant="outline" className="text-lg px-4 py-2 border-primary/30">
              Энциклопедия юмора
            </Badge>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Виды юмора
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Откройте для себя разнообразие комического: от тонкой иронии до абсурда
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {humorTypes.map((humor) => (
            <Card
              key={humor.id}
              className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl border-border/50 overflow-hidden group ${
                selectedHumor?.id === humor.id ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => setSelectedHumor(selectedHumor?.id === humor.id ? null : humor)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={humor.image}
                  alt={humor.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 ${humor.color} backdrop-blur-[2px]`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-3xl font-bold text-foreground drop-shadow-lg">
                    {humor.title}
                  </h3>
                </div>
              </div>
              <CardHeader>
                <CardDescription className="text-base">
                  {humor.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Icon name="Info" size={16} className="mr-2" />
                  <span>Нажмите для подробностей</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {selectedHumor && (
          <Card className="border-primary/30 animate-in fade-in-50 slide-in-from-bottom-4 duration-500">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-3xl">{selectedHumor.title}</CardTitle>
                <button
                  onClick={() => setSelectedHumor(null)}
                  className="p-2 rounded-full hover:bg-muted transition-colors"
                >
                  <Icon name="X" size={24} />
                </button>
              </div>
              <CardDescription className="text-lg">
                {selectedHumor.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Icon name="Quote" size={24} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Пример</h4>
                    <p className="text-muted-foreground italic text-lg leading-relaxed">
                      {selectedHumor.example}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Icon name="Lightbulb" size={24} className="text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Объяснение</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedHumor.explanation}
                    </p>
                  </div>
                </div>
              </div>

              <div className={`${selectedHumor.color} p-6 rounded-lg`}>
                <div className="flex items-center gap-2 mb-3">
                  <Icon name="Sparkles" size={20} className="text-primary" />
                  <h4 className="font-semibold">Ключевая особенность</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  {selectedHumor.id === 'irony' && 'Требует понимания контекста и подтекста'}
                  {selectedHumor.id === 'sarcasm' && 'Всегда содержит элемент критики или насмешки'}
                  {selectedHumor.id === 'satire' && 'Направлена на социальные проблемы и пороки'}
                  {selectedHumor.id === 'dark' && 'Помогает справляться с тяжёлыми темами через смех'}
                  {selectedHumor.id === 'absurd' && 'Ломает логику и создаёт неожиданные связи'}
                  {selectedHumor.id === 'wordplay' && 'Основывается на особенностях языка'}
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        <footer className="mt-20 text-center text-muted-foreground space-y-4 pb-8">
          <div className="flex items-center justify-center gap-2">
            <Icon name="Smile" size={20} />
            <p className="text-sm">Юмор делает мир лучше</p>
          </div>
          <p className="text-xs opacity-70">
            Энциклопедия видов юмора — изучайте искусство смеха
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
