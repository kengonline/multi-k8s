echo "Build image"
docker build -t kengonline/k8s-frontend:latest -t kengonline/k8s-frontend:$SHA -f ./frontend/Dockerfile ./frontend
docker build -t kengonline/k8s-backend-server:latest kengonline/k8s-backend-server:$SHA -f ./backend-server/Dockerfile ./backend-server
docker build -t kengonline/k8s-worker:latest -t kengonline/k8s-worker:$SHA -f ./worker/Dockerfile ./worker

echo "Push image to docker hub"
docker push kengonline/k8s-frontend:latest
docker push kengonline/k8s-frontend:$SHA

docker push kengonline/k8s-backend-server:latest
docker push kengonline/k8s-backend-server:$SHA

docker push kengonline/k8s-worker:latest
docker push kengonline/k8s-worker:$SHA

echo " Apply config to k8s"
kubectl apply -f k8s
kubectl set image deployments/frontend-deployment server=kengonline/k8s-frontend:$SHA
kubectl set image deployments/backend-server-deployment server=kengonline/k8s-backend-server:$SHA
kubectl set image deployments/worker-deployment server=kengonline/k8s-worker:$SHA