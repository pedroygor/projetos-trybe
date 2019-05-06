typedef struct pilha Pilha;

Pilha* create();

void push(Pilha *p, int valor);

int pop(Pilha *p);

int empty(Pilha *p);

int full(Pilha *p);

void display(Pilha *p);

void release(Pilha *p);