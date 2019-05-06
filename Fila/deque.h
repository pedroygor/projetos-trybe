typedef struct deque Deque;

Deque* criar();

void inserir_inicio(Deque *d, int valor);

void inserir_final(Deque *d, int valor);

int remover_inicio(Deque *d);

int remover_final(Deque *d);

int vazio(Deque *d);

int cheio(Deque *d);

void imprimir_inicio(Deque *d);

void imprimir_final(Deque *d);

void liberar(Deque *d);
