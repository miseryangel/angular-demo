export interface NoteType{
    title: string,
    description: string,
    icon: string,
    color: string,
    rank: number,
}

export const icons: string[] = [
    "sentiment_satisfied",
    "work",
    "business",
    "sentiment_dissatisfied",
    "star",
    "cake",
    "kitchen",
    "time_to_leave",
    "child_care",
    "voice_chat",
    "directions_walk",
];

export const colors: string[] = [
    "yellow",
    "pink",
    "green",
    "lime",
    "red",
]