# Exit on error
set -e

echo "Deploying to Surge.sh..."
echo "Current directory: $(pwd)"
echo "Checking for index.html..."
if [ -f "index.html" ]; then
    echo "index.html found."
else
    echo "Error: index.html not found in current directory!"
    exit 1
fi

echo "Starting deployment..."
# Using a new domain to avoid potential conflicts
npx surge . --domain careerconnect-saif-v1.surge.sh
